import type { Config } from 'tailwindcss';
const config: Config={content:['./src/**/*.{ts,tsx}'],theme:{extend:{colors:{ice:{50:'#f5fbff',100:'#e9f6ff',200:'#cfeeff',300:'#9edfff',400:'#62c8ff',500:'#2faef2',600:'#178fd4',700:'#1372ad',800:'#155f8d',900:'#174f74'},ink:'#0a1620'},boxShadow:{soft:'0 10px 35px rgba(23,114,173,.10)'}},},plugins:[]};
export default config;
