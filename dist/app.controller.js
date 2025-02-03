"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const public_decorator_1 = require("./common/decorators/public.decorator");
let AppController = class AppController {
    getInfo() {
        return {
            name: 'Hackathon Platform API',
            version: '1.0.0',
            description: 'API for managing hackathons, submissions, and evaluations',
            documentation: '/api/docs',
            status: 'running',
            endpoints: {
                api: '/api',
                docs: '/api/docs'
            }
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get API information' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Returns API information',
        schema: {
            type: 'object',
            properties: {
                name: { type: 'string', example: 'Hackathon Platform API' },
                version: { type: 'string', example: '1.0.0' },
                description: { type: 'string' },
                documentation: { type: 'string', example: '/api/docs' },
                status: { type: 'string', example: 'running' },
                endpoints: {
                    type: 'object',
                    properties: {
                        api: { type: 'string', example: '/api' },
                        docs: { type: 'string', example: '/api/docs' }
                    }
                }
            }
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getInfo", null);
exports.AppController = AppController = __decorate([
    (0, swagger_1.ApiTags)('app'),
    (0, common_1.Controller)()
], AppController);
//# sourceMappingURL=app.controller.js.map