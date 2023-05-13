import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesGuard } from 'src/authentication/guards/roles.guards';
import { DashboardSchema } from 'src/dashboard/dashboard.schema';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';


@Module({

    imports: [MongooseModule.forFeature([{ name: 'dashboard', schema: DashboardSchema }])],
    controllers: [DashboardController],
    providers: [DashboardService, RolesGuard]
})
export class DashboardModule {

    
}
