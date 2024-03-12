import {  Injectable, InjectionToken } from '@nestjs/common';
export const MY_TOKEN = new InjectionToken<string>('my-token');
