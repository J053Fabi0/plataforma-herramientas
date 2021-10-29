let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Documents/AA\ OnCampusJobs/plataforma-herramientas/src
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +5 index.js
badd +13 App.js
badd +7 ~/Documents/AA\ OnCampusJobs/plataforma-herramientas/package.json
badd +1 views/Login/Login.js
badd +3 components/index.js
badd +8 components/README.md
badd +13 components/Navbar/Navbar.js
badd +67 views/Home/Home.js
badd +6 ~/Documents/AA\ OnCampusJobs/plataforma-herramientas/config-overrides.js
badd +38 views/Home/SearchBar.js
badd +25 styles/mixins.js
badd +4 styles/colors.js
badd +7 styles/theme.js
badd +37 views/Home/Filters.js
badd +67 views/Home/Card.js
argglobal
%argdel
$argadd index.js
set stal=2
tabnew
tabnew
tabrewind
edit index.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 17 + 20) / 40)
exe 'vert 1resize ' . ((&columns * 35 + 76) / 152)
exe '2resize ' . ((&lines * 17 + 20) / 40)
exe 'vert 2resize ' . ((&columns * 35 + 76) / 152)
argglobal
enew
file fern://drawer:1/file:///home/josefabio/Documents/AA\%252520OnCampusJobs/plataforma-herramientas\$
setlocal fdm=expr
setlocal fde=b:anyfold_ind_buffer[v:lnum-1]
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal fen
wincmd w
argglobal
setlocal fdm=expr
setlocal fde=b:anyfold_ind_buffer[v:lnum-1]
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal fen
let s:l = 5 - ((4 * winheight(0) + 8) / 17)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 5
normal! 0
wincmd w
exe '1resize ' . ((&lines * 17 + 20) / 40)
exe 'vert 1resize ' . ((&columns * 35 + 76) / 152)
exe '2resize ' . ((&lines * 17 + 20) / 40)
exe 'vert 2resize ' . ((&columns * 35 + 76) / 152)
tabnext
edit App.js
argglobal
balt index.js
setlocal fdm=expr
setlocal fde=b:anyfold_ind_buffer[v:lnum-1]
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal fen
7
normal! zo
8
normal! zo
9
normal! zo
let s:l = 11 - ((10 * winheight(0) + 18) / 36)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 11
normal! 028|
lcd ~/Documents/AA\ OnCampusJobs/plataforma-herramientas/src
if exists(':tcd') == 2 | tcd ~/Documents/AA\ OnCampusJobs/plataforma-herramientas/src | endif
tabnext
edit ~/Documents/AA\ OnCampusJobs/plataforma-herramientas/src/views/Home/Home.js
argglobal
balt ~/Documents/AA\ OnCampusJobs/plataforma-herramientas/src/index.js
setlocal fdm=expr
setlocal fde=b:anyfold_ind_buffer[v:lnum-1]
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=99
setlocal fml=1
setlocal fdn=20
setlocal fen
9
normal! zo
17
normal! zo
18
normal! zo
19
normal! zo
21
normal! zo
42
normal! zo
63
normal! zo
64
normal! zo
66
normal! zo
76
normal! zo
78
normal! zo
79
normal! zo
let s:l = 67 - ((12 * winheight(0) + 18) / 36)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 67
normal! 027|
lcd ~/Documents/AA\ OnCampusJobs/plataforma-herramientas/src
if exists(':tcd') == 2 | tcd ~/Documents/AA\ OnCampusJobs/plataforma-herramientas/src | endif
tabnext 2
set stal=1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0&& getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOFc
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
