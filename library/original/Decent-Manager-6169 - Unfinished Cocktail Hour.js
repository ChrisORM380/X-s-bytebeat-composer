t/=2, //SPEED





// NOTE
c=1.047,
cs=1.107,
d=1.173,
ds=1.243,
e=1.318,
f=1.392,
fs=1.476,
g=1.571,
gs=1.656,
a=1.755,
as=1.862,
b=1.979,


w1lowmelody1=[0,e,0,e,0,0,e*2,0,0,e,0,e,0,0,e*2,0,0,e,0,e,0,0,e*2,0,0,g,0,g,0,0,d,0][t*1.1>>12&31],
w1lowmelody2=[0,a/2,0,a/2,0,0,a,0,0,a/2,0,a/2,0,0,a,0,0,b/2,0,b/2,0,0,b,0,0,b/2,0,b/2,0,0,d,0,0,e,0,e,0,0,e*2,0,0,e,0,e,0,0,e*2,0,0,e,0,e,0,0,e*2,0,0,g,0,g,0,0,d,0][t*1.1>>12&63],
w1lowmelody3=[0,e,0,e,0,0,e*2,0,0,e,0,e,0,0,e*2,0,0,e,0,e,0,0,e*2,0,0,g,0,g,0,0,d,0,0,c,0,c,0,0,c*2,0,0,c,0,c,0,0,c*2,0,0,c,0,c,0,0,c*2,0,0,d,0,d,0,0,ds,0,0,e,0,e,0,0,e*2,0,0,e,0,e,0,0,e*2,0,0,e,0,e,0,0,e*2,0,0,g,0,g,0,0,d,0,0,c,0,c,0,0,c*2,0,0,c,0,c,0,0,c*2,0,0,c,0,c,0,0,c*2,0,0,b,0,b,0,0,b*2,0][t*1.1>>12&127],

w1highmelody1=[g,b,e][(t*1.4>>10)%3],
w1highmelody2=[g,c*2,e][(t*1.4>>10)%3],
w1highmelody3=[fs,c*2,e][(t*1.4>>10)%3],
w1highmelody4=[fs,b,a][(t*1.4>>10)%3],
w1highmelody5=[gs,b,d][(t*1.4>>10)%3],

w3medmelody1=2*[d,e,g,e,0,d,e,d,a,d,e,g,0,e,g,e,d,e,g,e,0,d,e,d,a,g,a,b,0,a,g,0][t*1.1>>12&31],
w3medmelody2=2*[0,e,g,e,0,d,e,d,0,d,e,g,0,e,0,e,0,e,g,e,0,d,e,d,0,0,a,0,0,a,g,b][t*1.1>>12&31],

w2highmelody1=[c,c,c,c,c,c,a/2,0,b/2,b/2,b/2,g/2,0,0,a/2,0,0,0,0,0,0,0,0,0,0,0,0,0,a/2,a/2,as/2,0,b/2,b/2,b/2,b/2,a/2,0,0,0,g/2,g/2,g/2,fs/2,0,0,g/2,0,0,g/2,fs/2,0,e/2,e/2,d/2,0,e/2,e/2,g/2,0,a/2,a/2,b/2,0,c,c,c,c,c,c,cs,0,d,d,d,b/2,0,0,a/2,0,0,0,0,0,0,0,0,0,b/2,b/2,a/2,0,g/2,g/2,a/2,0,b/2,b/2,a/2,0,b/2,b/2,a/2,0,b/2,b/2,a/2,0,b/2,b/2,a/2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0][t*1.1>>12&127],


aa=sqrt(t*1.1%4096*15e3),
ab=sqrt(t*1.1%2048*1e4),
ac=sqrt(t*1.1%8192*1e3),
ad=sqrt(t*1.1%4096*1e3),

p='21111111'[t*1.1>>9&7],


W1PART1=(([128,192,224,240,250,240,224,192,128,64,32,16,6,16,32,64,128,192,224,240,224,192,128,64,32,16,32,64,128,255,128,1][t*w1lowmelody1>>4&31]&255)*'01010010'[t*1.1>>12&7]*(-t*1.1>>4&255)>>11)+([128,192,224,240,250,240,224,192,128,64,32,16,6,16,32,64,128,192,224,240,224,192,128,64,32,16,32,64,128,255,128,1][t*w1lowmelody1>>4&31]%256/16)

,

W1PART2=(([128,192,224,240,250,240,224,192,128,64,32,16,6,16,32,64,128,192,224,240,224,192,128,64,32,16,32,64,128,255,128,1][t*4*w1highmelody1>>4&31]&255)*'00000000111000000000111000001110'[t*1.1>>10&31]*(-t*1.1>>4&255)>>14)+([128,192,224,240,250,240,224,192,128,64,32,16,6,16,32,64,128,192,224,240,224,192,128,64,32,16,32,64,128,255,128,1][t*4*w1highmelody1>>4&31]*'00000000111000000000111000001110'[t*1.1>>10&31]%256/16)

,

W1PART3=(([128,192,224,240,250,240,224,192,128,64,32,16,6,16,32,64,128,192,224,240,224,192,128,64,32,16,32,64,128,255,128,1][t*w1lowmelody2>>4&31]&255)*'01010010'[t*1.1>>12&7]*(-t*1.1>>4&255)>>11)+([128,192,224,240,250,240,224,192,128,64,32,16,6,16,32,64,128,192,224,240,224,192,128,64,32,16,32,64,128,255,128,1][t*w1lowmelody2>>4&31]%256/16)

,


W1PART4=(([128,192,224,240,250,240,224,192,128,64,32,16,6,16,32,64,128,192,224,240,224,192,128,64,32,16,32,64,128,255,128,1][t*4*[w1highmelody2,w1highmelody2,w1highmelody3,w1highmelody4,w1highmelody1,w1highmelody1,w1highmelody5,w1highmelody5,w1highmelody2,w1highmelody2,w1highmelody3,w1highmelody4,w1highmelody1,w1highmelody1,w1highmelody1,w1highmelody1][t*1.1>>15&15]>>4&31]&255)*'00000000111000000000111000001110'[t*1.1>>10&31]*(-t*1.1>>4&255)>>14)+([128,192,224,240,250,240,224,192,128,64,32,16,6,16,32,64,128,192,224,240,224,192,128,64,32,16,32,64,128,255,128,1][t*4*[w1highmelody2,w1highmelody2,w1highmelody3,w1highmelody4,w1highmelody1,w1highmelody1,w1highmelody5,w1highmelody5,w1highmelody2,w1highmelody2,w1highmelody3,w1highmelody4,w1highmelody1,w1highmelody1,w1highmelody1,w1highmelody1][t*1.1>>15&15]>>4&31]*'00000000111000000000111000001110'[t*1.1>>10&31]%256/16)

,

W1PART5=(([128,192,224,240,250,240,224,192,128,64,32,16,6,16,32,64,128,192,224,240,224,192,128,64,32,16,32,64,128,255,128,1][t*w1lowmelody3>>4&31]&255)*'01010010'[t*1.1>>12&7]*(-t*1.1>>4&255)>>11)+([128,192,224,240,250,240,224,192,128,64,32,16,6,16,32,64,128,192,224,240,224,192,128,64,32,16,32,64,128,255,128,1][t*w1lowmelody3>>4&31]%256/16)
,

W2PART1=[128,230,190,135,190,239,142,85,190,255,211,105,149,168,77,24,129,240,146,40,56,83,32,2,43,149,77,14,80,148,80,14]
[t*1.007*[p,1,1,1,1,1,p,0,p,1,1,p,1,1,p,0,0,0,0,0,0,0,0,0,0,0,0,0,p,1,p,0,p,1,1,1,p,0,0,0,p,1,1,p,0,0,p,0,0,p,p,0,p,1,p,0,p,1,p,0,p,1,p,0,p,1,1,1,1,1,p,0,p,1,1,p,1,1,p,0,0,0,0,0,0,0,0,0,p,1,p,0,p,1,p,0,p,1,p,0,p,1,p,0,p,1,p,0,p,1,p,0,0,0,0,0,0,0,0,0][t*1.1>>12&127]/[1.06,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,,,,,1,1,,,,,,,,,,,,,,,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,,,,,1,1,,,,,1,1,1,1,,,1,1,1,1,1,1,,,1,1,1,1,1,1,,,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,,1,1,1,1,1,1,1,1,,,,,1,1,,,,,,,,,,,1,1,1,1,1,1,,,1,1,1,1,1,1,,,1,1,1,1,1,1,,,1,1,1,1,1,1,,,1,1,1,1,1,1,,,1,1,1,1,1,1,,,1,1,1,1,1,1][t*1.1>>11&255]*8*w2highmelody1>>4&31]/'11111111111111111111111112461111'[t*1.1>>14&31]/8

,


KICK1=(A=[3,3,3,10,10,20,30,40,50,70,90,100,110,120,130,130,140,140,140,130,130,120,110,100,90,70,50,40,30,20,10,10][ac>>3&31]/2,B=-t/2.5*1.1&64,[B,A,A,A,A,A,A,A,A,A,A,A,A,A,A,A][t*1.1>>9&15]*'1000'[t*1.1>>12&3])/1.3

,

KICK2=(A=[3,3,3,10,10,20,30,40,50,70,90,100,110,120,130,130,140,140,140,130,130,120,110,100,90,70,50,40,30,20,10,10][ad>>3&31]/2,B=-t/2.5*1.1&64,[B,A,A,A,A,A,A,A][t*1.1>>9&7]*'00000111'[t*1.1>>12&7])

,




W3PART1=(([128,160,180,195,128,218,218,128,240,128,218,218,128,195,180,160,128,100,128,75,128,59,128,45,128,37,128,45,128,59][(aa>>4)%30]&255)*(-t*1.1>>4&255)>>11)+([128,160,180,195,128,218,218,128,240,128,218,218,128,195,180,160,128,100,128,75,128,59,128,45,128,37,128,45,128,59][(aa>>4)%30]/4)

,

W3PART2=(([128,160,180,195,128,218,218,128,240,128,218,218,128,195,180,160,128,100,128,75,128,59,128,45,128,37,128,45,128,59][(ab>>4)%30]&255)*(-t*1.1>>3&255)>>11)+([128,160,180,195,128,218,218,128,240,128,218,218,128,195,180,160,128,100,128,75,128,59,128,45,128,37,128,45,128,59][(ab>>4)%30]/4)

,

PART1=[W3PART1,W3PART1,W3PART1,0,W3PART1,0,W3PART1,W3PART1,0,W3PART1,0,W3PART2,W3PART1,W3PART1,W3PART1,W3PART1][t*1.1>>12&15]/1.5,
V1=[0,0,0,0,0,0,0,PART1][t*1.1>>16&7]

,


W4PART1=(-abs(t*w3medmelody1*'22211100'[t*1.1>>8&7]%256-128)/24+cbrt(sin(-t*w3medmelody1*'22211100'[t*1.1>>8&7]*PI/128))*'01'[t*w3medmelody1*'22211100'[t*1.1>>8&7]>>7&1]*32+5)*'1100'[t*1.1>>10&3]

,

W4PART2=(-abs(t*w3medmelody2*'22211100'[t*1.1>>8&7]%256-128)/24+cbrt(sin(-t*w3medmelody2*'22211100'[t*1.1>>8&7]*PI/128))*'01'[t*w3medmelody2*'22211100'[t*1.1>>8&7]>>7&1]*32+5)*'1100'[t*1.1>>10&3]

,

V2=[0,0,0,0,W3PART1,0,0,0,0,0,0,0,W3PART1,0,0,0,0,0,0,0,W3PART1,0,0,0,0,0,0,0,W3PART1,0,0,W3PART1][t*1.1>>12&31]/1.5

,

V3=[W3PART1,0,0,0,W3PART1,0,0,0,W3PART1,0,0,0,W3PART1,0,W3PART1,0,W3PART1,0,0,0,W3PART1,0,0,0,W3PART1,W3PART1,0,W3PART1,W3PART1,0,0,0][t*1.1>>12&31]/1.5

,

PART2=t*2*[g,g,fs,0,e,e,d,e,0,e,d,0,e,e,fs,0,g,g,fs,0,e,e,fs,0,a,0,0,g,g,g,0,0,g,g,fs,0,e,e,d,e,0,e,d,0,e,e,fs,0,g,g,fs,0,e,e,fs,0,a,a,b,0,a,a,fs,0,g,g,fs,0,e,e,d,e,0,e,d,0,e,e,fs,0,g,g,fs,0,e,e,fs,0,a,0,0,g,g,g,a,0,a,a,b,0,a,a,b,0,a,a,b,0,a,a,g,0,g,g,g,fs,0,0,d,0,fs,fs,e,0,d,d,e,0][t*1.1>>12&127]

,

PART3=t*2*[e,e,d,0,b/2,b/2,a/2,b/2,0,b/2,a/2,0,b/2,b/2,d,0,e,e,d,0,b/2,b/2,d,0,fs,0,0,e,e,e,0,0,e,e,d,0,b/2,b/2,a/2,b/2,0,b/2,a/2,0,b/2,b/2,d,0,e,e,d,0,b/2,b/2,d,0,fs,fs,g,0,fs,fs,d,0,e,e,d,0,b/2,b/2,a/2,b/2,0,b/2,a/2,0,b/2,b/2,d,0,e,e,d,0,b/2,b/2,d,0,fs,0,0,e,e,e,fs,0,fs,fs,g,0,fs,fs,g,0,fs,fs,g,0,fs,fs,e,0,e,e,e,d,0,0,b/2,0,d,d,b/2,0,a/2,a/2,b/2,0][t*1.1>>12&127],Y1=[PART2,PART3][t*1.8>>11&1]%256/6,

[W1PART1+W1PART2+KICK1+KICK2*'0000000000000001'[t*1.1>>15&15],
W1PART3+W1PART4+KICK1+W2PART1+V1,
W1PART5+W1PART2+V2+W4PART1+KICK1][t*1.1>>19&3]