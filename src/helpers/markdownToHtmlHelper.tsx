import {
  AsProps,
  Blockquote,
  Box,
  Flex,
  Heading,
  Link,
  Reminder,
  ReminderVariantType,
  SyntaxHighlighter,
  Text,
} from '@eleven-labs/design-system';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import rehypeRaw from 'rehype-raw';
import rehypeReact from 'rehype-react';
import rehypeRewrite from 'rehype-rewrite';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import { unified } from 'unified';

import { frontmatter } from '@/helpers/markdownHelper';
import { intersection } from '@/helpers/objectHelper';
import { remarkFigurePlugin } from '@/helpers/remarkPlugins/remarkFigurePlugin';

const getReminderVariantByAdmonitionVariant = (admonitionVariant: string): ReminderVariantType => {
  switch (admonitionVariant) {
    case 'abstract':
    case 'summary':
    case 'tldr':
      return 'summary';
    case 'info':
    case 'todo':
      return 'info';
    case 'tip':
    case 'hint':
    case 'important':
      return 'tip';
    case 'success':
    case 'check':
    case 'done':
      return 'success';
    case 'question':
    case 'help':
    case 'faq':
      return 'question';
    case 'warning':
    case 'caution':
    case 'attention':
      return 'warning';
    case 'failure':
    case 'fail':
    case 'missing':
      return 'failure';
    case 'danger':
    case 'error':
      return 'danger';
    case 'bug':
      return 'bug';
    case 'example':
      return 'example';
    case 'quote':
    case 'cite':
      return 'quote';
    case 'note':
    default:
      return 'note';
  }
};

const cleanMarkdown = (markdownContent: string): string =>
  markdownContent
    .replace(/{{\s*?site.baseurl\s*?}}\/assets\//g, `${process.env.BASE_URL || '/'}imgs/posts/`)
    .replaceAll('/_assets/posts/', `${process.env.BASE_URL || '/'}imgs/posts/`);

export const markdownToHtml = function <TData = Record<string, unknown>>(
  markdownContent: string
): { data: TData; html: string } {
  const frontmatterResult = frontmatter<TData>(markdownContent);

  const reactComponent = unified()
    .use(remarkParse)
    .use(remarkFigurePlugin)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeRewrite, {
      selector: 'div',
      rewrite: (node): void => {
        if (node.type === 'element') {
          const classNames: string[] = (node?.properties?.className as string[]) || [];
          if (node.properties?.markdown && intersection(['admonition'], classNames).length > 0) {
            const reminderVariant = getReminderVariantByAdmonitionVariant(classNames[1]);
            const titleNode = node.children.shift();
            const reminderTitle =
              titleNode?.type === 'element'
                ? titleNode?.children?.map((child) => (child.type === 'text' ? child.value : '')).join()
                : '';
            node.properties = {
              'reminder-variant': reminderVariant,
              'reminder-title': reminderTitle,
            };
          }
        }
      },
    })
    .use(rehypeReact, {
      createElement: React.createElement,
      Fragment: React.Fragment,
      passNode: true,
      components: {
        div: ({ node, children, ...props }): JSX.Element => {
          const reminderProps = props as { ['reminder-variant']?: ReminderVariantType; ['reminder-title']?: string };
          if (reminderProps?.['reminder-variant'] && reminderProps?.['reminder-title']) {
            return (
              <Reminder my="m" variant={reminderProps['reminder-variant']} title={reminderProps['reminder-title']}>
                {children}
              </Reminder>
            );
          }

          return <Box {...(props as AsProps)}>{children}</Box>;
        },
        h2: ({ children }): JSX.Element => (
          <Heading as="h2" size="l" mt={{ xs: 'l', md: 'xl' }} mb={{ xs: 'xxs', md: 'l' }}>
            {children}
          </Heading>
        ),
        h3: ({ children }): JSX.Element => (
          <Heading as="h3" size="m" mt={{ xs: 'xs', md: 'l' }} mb={{ xs: 'xxs', md: 's' }}>
            {children}
          </Heading>
        ),
        h4: ({ children }): JSX.Element => (
          <Heading as="h4" size="s" mt={{ xs: 'xs', md: 'l' }} mb={{ xs: 'xxs', md: 's' }}>
            {children}
          </Heading>
        ),
        p: ({ node, ...props }): JSX.Element => <Text as="p" mb="xxs" {...(props as AsProps)} />,
        li: ({ node, ...props }): JSX.Element => <Text as="li" mb="xxs" {...(props as AsProps)} />,
        strong: ({ children }): JSX.Element => (
          <Text as="span" fontWeight="bold">
            {children}
          </Text>
        ),
        em: ({ children }): JSX.Element => (
          <Text as="span" italic={true}>
            {children}
          </Text>
        ),
        i: ({ children }): JSX.Element => (
          <Text as="span" italic={true}>
            {children}
          </Text>
        ),
        a: ({ node, ...props }): JSX.Element => {
          const isExternalLink = (props.href as string)?.match(/^http(s)?:\/\//);
          return (
            <Link {...props} rel={isExternalLink ? 'nofollow noreferrer' : ''} style={{ overflowWrap: 'anywhere' }} />
          );
        },
        blockquote: ({ node, ...props }): JSX.Element => <Blockquote {...props} />,
        pre: ({ node, ...props }): JSX.Element => <Box as="pre" textSize="xs" {...(props as AsProps)} />,
        code: ({ node, className, children, ...props }): JSX.Element => {
          const match = /language-(\w+)/.exec(className || '');
          if (className && className.match('mermaid')) {
            return (
              <Flex as="pre" justifyContent="center" alignItems="center" className="mermaid">
                {children}
              </Flex>
            );
          }
          return match ? (
            <SyntaxHighlighter children={String(children).replace(/\n$/, '')} language={match[1]} {...props} />
          ) : (
            <Box as="code" px="xxs-2" bg="ultra-light-grey" color="ultra-dark-grey" textSize="xs">
              {children}
            </Box>
          );
        },
        figure: ({ node, ...props }): JSX.Element => {
          return React.createElement('figure', {
            ...props,
            style: {
              textAlign: 'center',
            },
          });
        },
        img: ({ node, ...props }): JSX.Element => {
          const urlParams = new URLSearchParams(props.src?.split('?')?.[1] ?? '');
          return React.createElement('img', {
            ...props,
            style: {
              display: 'block',
              maxWidth: urlParams.get('maxWidth') ? `${urlParams.get('maxWidth')}px` : '100%',
              maxHeight: urlParams.get('maxHeight') ? `${urlParams.get('maxHeight')}px` : undefined,
              width: urlParams.get('width') ? `${urlParams.get('width')}px` : undefined,
              height: urlParams.get('height') ? `${urlParams.get('height')}px` : undefined,
              margin: 'var(--spacing-xs) auto',
            },
          });
        },
        script: ({ node, ...props }): JSX.Element | null => {
          if (props.src === 'https://platform.twitter.com/widgets.js') {
            return null;
          }
          return React.createElement('script', props);
        },
      },
    })
    .processSync(cleanMarkdown(frontmatterResult.content)).result;

  return {
    data: frontmatterResult.data,
    html: String(ReactDOMServer.renderToStaticMarkup(reactComponent)),
  };
};
