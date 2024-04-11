import Block from '@/components/Block';
import Title from '@/components/Title';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='bg-slate-900 text-gray-300 font-bold'>
      <header className='bg-slate-900 border-b border-slate-700 fixed flex items-center pl-4 h-16 w-full'>
        <span className='text-lg'>Garnet Software</span>
      </header>
      <main className='pt-16 w-3/4 max-w-[700px] m-auto'>
        <div className='flex flex-col gap-4 py-4'>
          <Title title='自己紹介' />
          <span>大学生エンジニア | Web / モバイル / コンピュータ言語処理</span>
          <Block description={
            <span>
              2019 N高等学校 入学
              <br />
              2022 N高等学校 卒業
              <br />
              2022 情報経営イノベーション専門職大学 入学
            </span>
          } />
          <Title title='スキル表' />
          <Block
            title='フロントエンド'
            description={
              <div className='flex flex-row gap-2'>
                <span>JavaScript / TypeScript<br />React<br />React Native / Expo<br />Dart / Flutter</span>
                <span>★★★★★<br />★★★★☆<br />★★★★☆<br />★★★☆☆</span>
              </div>
            }
          />
          <Block
            title='バックエンド'
            description={
              <div className='flex flex-row gap-2'>
                <span>SQL / NoSQL<br />PHP<br />Laravel<br />Google Cloud<br />Firebase</span>
                <span>★★★☆☆<br />★★★★☆<br />★★★☆☆<br />★★☆☆☆<br />★★☆☆☆</span>
              </div>
            }
          />
          <Block
            title='その他'
            description={
              <div className='flex flex-row gap-2'>
                <span>Rust<br />C#</span>
                <span>★★★★☆<br />★★★★☆</span>
              </div>
            }
          />
          <Title title='成果物' />
          <Block
            title='インターン | はなまる加須'
            caption='2022-&nbsp;&nbsp;TypeScript / React Native / Expo / PHP / Laravel / Firebase'
            description='地域創生ポータル「はなまる加須」のモバイルアプリ化に携わり、企画～設計～実装などのさまざまな工程を担当しました。'
            link={{
              url: 'https://example.com',
              text: '公式サイトで見る',
            }}
          />
          <Block
            title='業務委託 | toC アプリ開発'
            caption='2024-&nbsp;&nbsp;Flutter'
            description='スタートアップ企業でクライアント向けモバイルアプリのフロントエンドを担当しています。'
          />
          <Block
            title='個人開発 | Twillus'
            caption='2022&nbsp;&nbsp;TypeScript / Extension API'
            description='Twitter の画像サムネイルを拡大する Chrome 拡張機能を開発しました。現時点で700以上の総インストール数を獲得しています。'
            link={{
              url: 'https://chromewebstore.google.com/detail/knpbokpcebojngoedkolnmnjghakiadp?hl=ja',
              text: 'ストアページで見る',
            }}
          />
          <Block
            title='個人開発 | Karin'
            caption='2024-&nbsp;&nbsp;Rust / 自作処理系'
            description='コード品質重視のプログラミング言語 Karin をスクラッチ開発中。字句解析、構文解析やコード生成、型検査などの処理を自身の手で実装しています。'
            link={{
              url: 'https://github.com/orgs/karin-lang/repositories',
              text: 'GitHub で見る',
            }}
          />
          <Title title='お問い合わせ / SNS' />
          <Block description={
            <span>
              Email: <a className='underline' href='mailto:contact@garnet.works'>contact@garnet.works</a>
              <br />
              GitHub: <a className='underline' href='https://github.com/Garnet3106'>Garnet3106</a>
              <br />
              Twitter: <a className='underline' href='https://twitter.com/GarnetSoftware'>@GarnetSoftware</a>
            </span>
          } />
        </div>
      </main>
    </div>
  );
}
