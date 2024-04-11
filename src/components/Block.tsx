'use client';

import { ReactNode } from 'react';

export type BlockProps = {
  title?: ReactNode,
  caption?: ReactNode,
  description: ReactNode,
  link?: {
    url: string,
    text: string,
  },
};

export default function Block(props: BlockProps) {
  return (
    <div
      className={'bg-slate-800 transition-all rounded-lg p-4 text-sm flex flex-col' + (props.link ? ' hover:bg-slate-700 cursor-pointer' : '')}
      onClick={onClick}
    >
      {props.title && <span className={'text-lg' + (props.caption ? '' : ' pb-2')}>{props.title}</span>}
      {props.caption && <span className='text-xs text-slate-500 pb-2'>{props.caption}</span>}
      <span>{props.description}</span>
      {
        props.link && (
          <div className='mt-1'>
            {props.link && <span className='text-xs underline'>{props.link.text}</span>}
          </div>
        )
      }
    </div>
  );

  function onClick() {
    if (props.link) {
      window.open(props.link.url);
    }
  }
}
