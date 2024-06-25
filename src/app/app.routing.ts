import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { IndexClientesComponent } from "./components/clientes/index-clientes/index-clientes.component";
import { IndexProductoComponent } from "./components/productos/index-producto/index-producto.component";
import { CreateProductoComponent } from "./components/productos/create-producto/create-producto.component";
import { EditProductoComponent } from "./components/productos/edit-producto/edit-producto.component";
import { VariedadesProductoComponent } from "./components/productos/variedades-producto/variedades-producto.component";
import { InventarioProductoComponent } from "./components/productos/inventario-producto/inventario-producto.component";
import { GaleriaProductoComponent } from "./components/productos/galeria-producto/galeria-producto.component";
import { AuthGuard } from "../app/guards/auth.guard";
import { IndexCuponComponent } from "./components/cupones/index-cupon/index-cupon.component";
import { CreateCuponComponent } from "./components/cupones/create-cupon/create-cupon.component";
import { EditCuponComponent } from "./components/cupones/edit-cupon/edit-cupon.component";

const appRoute : Routes = [
    {path: '', redirectTo: 'login', pathMatch : 'full'},
    {path: 'login', component: LoginComponent},


    {path: 'clientes', component: IndexClientesComponent, canActivate:[AuthGuard]},

    {path: 'productos', component: IndexProductoComponent, canActivate:[AuthGuard]},
    {path: 'productos/create', component: CreateProductoComponent, canActivate:[AuthGuard]},
    {path: 'productos/edit/:id', component: EditProductoComponent, canActivate:[AuthGuard]},
    {path: 'productos/variedades/:id', component: VariedadesProductoComponent, canActivate:[AuthGuard]},
    {path: 'productos/inventario/:id', component: InventarioProductoComponent, canActivate:[AuthGuard]},
    {path: 'productos/galeria/:id', component: GaleriaProductoComponent, canActivate:[AuthGuard]},

    {path: 'cupones', component: IndexCuponComponent, canActivate:[AuthGuard]},
    {path: 'cupones/create', component: CreateCuponComponent, canActivate:[AuthGuard]},
    {path: 'cupones/edit/:id', component: EditCuponComponent, canActivate:[AuthGuard]},

    /* {path: '**', component: NotFoundComponent}, */
]

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> =  RouterModule.forRoot(appRoute);