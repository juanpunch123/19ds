a={data: 'a'};
b={data: 'b'};
c={data: 'c'};
d={data: 'd'};
a.l=[];
b.l=[];
c.l=[];
d.l=[];

a.l.push(a);
a.l.push(b);
a.l.push(c);
b.l.push(a);
b.l.push(c);
b.l.push(d);
b.l.push(d);
c.l.push(a);
c.l.push(b);
c.l.push(d);
d.l.push(b);
d.l.push(b);
d.l.push(c);