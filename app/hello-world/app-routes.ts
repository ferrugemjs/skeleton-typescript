
const lazyModule = () => import("./lazy-app.html");

// export class AppRoutes {
//     private routes: Route[] = [
//         {
//             path: '/lazy-app',
//             view: lazyModule,
//         }
//     ];
//     public prop1 = 'prop1';
//     private prop3 = 'prop3';
//     private prop4 = 'prop4';
//     constructor({ prop3 }: { prop3: string }) {
//         this.prop3 = prop3;
//     }
// }

// function AppRoutes({ prop3 }: { prop3: string }) {
//     this.routes = [];
//     this.prop1 = 'prop1';
//     this.prop3 = 'prop3';
//     this.prop4 = 'prop41';
//     this.prop3 = prop3;
// }

const AppRoutes = (props: { prop3: string }) => {
    console.log('props:', props);
    // this.routes = [];
    // this.prop1 = 'prop1';
    // this.prop3 = 'prop3';
    // this.prop4 = 'prop41';
    // this.prop3 = prop3;
}

export { AppRoutes };
