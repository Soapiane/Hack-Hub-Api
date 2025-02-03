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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const evaluations_service_1 = require("./evaluations.service");
const create_evaluation_dto_1 = require("./dto/create-evaluation.dto");
const update_evaluation_dto_1 = require("./dto/update-evaluation.dto");
const query_evaluation_dto_1 = require("./dto/query-evaluation.dto");
const pagination_dto_1 = require("../common/dto/pagination.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../common/guards/roles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const role_enum_1 = require("../common/enums/role.enum");
let EvaluationsController = class EvaluationsController {
    constructor(evaluationsService) {
        this.evaluationsService = evaluationsService;
    }
    create(createEvaluationDto, req) {
        return this.evaluationsService.create(createEvaluationDto, req.user);
    }
    findAll(query, pagination, req) {
        return this.evaluationsService.findAll(query, pagination, req.user);
    }
    findMyEvaluations(pagination, req) {
        const query = { judgeId: req.user.id };
        return this.evaluationsService.findAll(query, pagination, req.user);
    }
    findOne(id, req) {
        return this.evaluationsService.findOne(id, req.user);
    }
    update(id, updateEvaluationDto, req) {
        return this.evaluationsService.update(id, updateEvaluationDto, req.user);
    }
    remove(id, req) {
        return this.evaluationsService.remove(id, req.user);
    }
};
exports.EvaluationsController = EvaluationsController;
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.JUDGE),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new evaluation' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The evaluation has been created.' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_evaluation_dto_1.CreateEvaluationDto, Object]),
    __metadata("design:returntype", void 0)
], EvaluationsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all evaluations' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all evaluations.' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_evaluation_dto_1.QueryEvaluationDto,
        pagination_dto_1.PaginationDto, Object]),
    __metadata("design:returntype", void 0)
], EvaluationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('my-evaluations'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.JUDGE),
    (0, swagger_1.ApiOperation)({ summary: 'Get judge\'s evaluations' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return judge\'s evaluations.' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.PaginationDto, Object]),
    __metadata("design:returntype", void 0)
], EvaluationsController.prototype, "findMyEvaluations", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get an evaluation by id' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the evaluation.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EvaluationsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.JUDGE),
    (0, swagger_1.ApiOperation)({ summary: 'Update an evaluation' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The evaluation has been updated.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_evaluation_dto_1.UpdateEvaluationDto, Object]),
    __metadata("design:returntype", void 0)
], EvaluationsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.JUDGE, role_enum_1.Role.ADMIN),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an evaluation' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The evaluation has been deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EvaluationsController.prototype, "remove", null);
exports.EvaluationsController = EvaluationsController = __decorate([
    (0, swagger_1.ApiTags)('evaluations'),
    (0, common_1.Controller)('evaluations'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __metadata("design:paramtypes", [evaluations_service_1.EvaluationsService])
], EvaluationsController);
//# sourceMappingURL=evaluations.controller.js.map