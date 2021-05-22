let x = 1;
class T
{
 constructor() {
 this.f1 = 1;
 this.f2 = 2;

}
 p() {
 this.f1 = this.f1 + this.r() + x;
 this.f1 = this.r();
 return this.f1;

}
 q() { return this.f1; }
 r() { return this.q(); } }
class S extends T {
 p() { return super.p(); }
 q() { return 3; } }
class U extends S {
 p() { return super.p(); }
 q() { return this.f2 + x; }
 r() { return this.q() + x; } }function main () {
 let sT = new T();
 let sS = new S();
 let sU = new U();

console.log(sT.p());

console.log(sS.p());

console.log(sU.p());

console.log(sT.p());

console.log(sS.p());

console.log(sU.p());

console.log(sT.q());

console.log(sS.q());

console.log(sU.q());
}main();