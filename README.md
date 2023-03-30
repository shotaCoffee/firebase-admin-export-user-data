## firebase プロジェクトからユーザー情報を抜き出すスクリプトです

1. firebase の プロジェクト設定（左上の歯車）から、サービスアカウントへアクセスし秘密鍵を生成する
2. このプロジェクトのディレクトリに serviceAccountKey.json として配置する
3. node index.js を実行する（npm run export でも可）
4. このディレクトリ内に user_emails.csv として吐き出される