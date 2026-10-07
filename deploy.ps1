# 本地一键构建，并把产物推到当前仓库的 gh-pages 分支。
# 用法：在仓库根目录执行  powershell -ExecutionPolicy Bypass -File .\deploy.ps1
$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $root

if (-not (git remote get-url origin 2>$null)) {
  throw '当前目录还没有 origin。先 git remote add origin <仓库地址>，再执行本脚本。'
}

npm run docs:build

$dist = Join-Path $root 'docs\.vitepress\dist'
$remote = git remote get-url origin

Push-Location $dist
git init
git checkout -B gh-pages
git add -A
git commit -m "deploy"
git push -f $remote HEAD:gh-pages
Pop-Location

Write-Output "已推送到 $remote 的 gh-pages 分支。到仓库 Settings -> Pages，Source 选 Deploy from a branch，分支选 gh-pages，目录选 /(root)。"
