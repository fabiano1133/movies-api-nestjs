import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AccountService } from 'src/account/usecases/account.service';
import { CreateAccountDTO } from '../DTOs/create-account.dto';
import { User } from '../entities/account.entity';
import { AuthGuard } from 'src/common/Guard/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Account')
@Controller('v1/api/account')
export class AccountController {
  constructor(private readonly usersService: AccountService) {}

  @Post('create-account')
  async create(@Body() data: CreateAccountDTO): Promise<void> {
    await this.usersService.create(data);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @Get('user')
  async getUserById(@Req() req: any): Promise<User> {
    const user_id = req.user.id;
    const user = await this.usersService.getUserById(user_id);
    return user;
  }
}
