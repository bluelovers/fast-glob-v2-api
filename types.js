"use strict";
/**
 * Created by user on 2019/6/27.
 */
FastGlob.default = FastGlob;
module.exports = FastGlob;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFxQ0gsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7QUFFNUIsaUJBQVMsUUFBUSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOS82LzI3LlxuICovXG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3NldHRpbmdzLmQudHNcIiAvPlxuaW1wb3J0ICogYXMgX3NldHRpbmcgZnJvbSAnZmFzdC1nbG9iL291dC9zZXR0aW5ncyc7XG5pbXBvcnQgKiBhcyBfdHlwZXMgZnJvbSAnZmFzdC1nbG9iL291dC90eXBlcyc7XG5cbmltcG9ydCBfRmFzdEdsb2JfID0gcmVxdWlyZSgnZmFzdC1nbG9iJyk7XG5cbmltcG9ydCBQYXR0ZXJuID0gX0Zhc3RHbG9iXy5QYXR0ZXJuO1xuaW1wb3J0IE9wdGlvbnMgPSBfRmFzdEdsb2JfLk9wdGlvbnM7XG5pbXBvcnQgRW50cnkgPSBfRmFzdEdsb2JfLkVudHJ5O1xuaW1wb3J0IEVudHJ5SXRlbSA9IF90eXBlcy5FbnRyeUl0ZW07XG5pbXBvcnQgT3B0aW9uc1dpdGhFbnRyeU9iamVjdFByZWRpY2F0ZSA9IF9zZXR0aW5nLk9wdGlvbnNXaXRoRW50cnlPYmplY3RQcmVkaWNhdGU7XG5cbmRlY2xhcmUgZnVuY3Rpb24gRmFzdEdsb2Ioc291cmNlOiBQYXR0ZXJuIHwgUGF0dGVybltdLCBvcHRpb25zOiBPcHRpb25zV2l0aEVudHJ5T2JqZWN0UHJlZGljYXRlKTogUHJvbWlzZTxFbnRyeVtdPjtcbmRlY2xhcmUgZnVuY3Rpb24gRmFzdEdsb2Ioc291cmNlOiBQYXR0ZXJuIHwgUGF0dGVybltdLCBvcHRpb25zPzogT3B0aW9ucyk6IFByb21pc2U8c3RyaW5nW10+O1xuZGVjbGFyZSBmdW5jdGlvbiBGYXN0R2xvYjxUIGV4dGVuZHMgRW50cnlJdGVtID0gc3RyaW5nPihzb3VyY2U6IFBhdHRlcm4gfCBQYXR0ZXJuW10sIG9wdGlvbnM/OiBPcHRpb25zKTogUHJvbWlzZTxUW10+O1xuXG5kZWNsYXJlIG5hbWVzcGFjZSBGYXN0R2xvYiB7XG5cdGV4cG9ydCBpbXBvcnQgT3B0aW9ucyA9IF9GYXN0R2xvYl8uT3B0aW9ucztcblx0ZXhwb3J0IGltcG9ydCBPcHRpb25zV2l0aEVudHJ5T2JqZWN0UHJlZGljYXRlID0gX3NldHRpbmcuT3B0aW9uc1dpdGhFbnRyeU9iamVjdFByZWRpY2F0ZTtcblx0ZXhwb3J0IGltcG9ydCBFbnRyeSA9IF9GYXN0R2xvYl8uRW50cnk7XG5cdGV4cG9ydCBpbXBvcnQgRW50cnlJdGVtID0gX3R5cGVzLkVudHJ5SXRlbTtcblx0ZXhwb3J0IGltcG9ydCBUYXNrID0gX0Zhc3RHbG9iXy5UYXNrO1xuXHRleHBvcnQgaW1wb3J0IFBhdHRlcm4gPSBfRmFzdEdsb2JfLlBhdHRlcm47XG5cdGV4cG9ydCBpbXBvcnQgRmlsZVN5c3RlbUFkYXB0ZXIgPSBfRmFzdEdsb2JfLkZpbGVTeXN0ZW1BZGFwdGVyO1xuXHRmdW5jdGlvbiBhc3luYyhzb3VyY2U6IFBhdHRlcm4gfCBQYXR0ZXJuW10sIG9wdGlvbnM6IE9wdGlvbnNXaXRoRW50cnlPYmplY3RQcmVkaWNhdGUpOiBQcm9taXNlPEVudHJ5W10+O1xuXHRmdW5jdGlvbiBhc3luYyhzb3VyY2U6IFBhdHRlcm4gfCBQYXR0ZXJuW10sIG9wdGlvbnM/OiBPcHRpb25zKTogUHJvbWlzZTxzdHJpbmdbXT47XG5cdGZ1bmN0aW9uIGFzeW5jPFQgZXh0ZW5kcyBFbnRyeUl0ZW0gPSBzdHJpbmc+KHNvdXJjZTogUGF0dGVybiB8IFBhdHRlcm5bXSwgb3B0aW9ucz86IE9wdGlvbnMpOiBQcm9taXNlPFRbXT47XG5cdGZ1bmN0aW9uIHN5bmMoc291cmNlOiBQYXR0ZXJuIHwgUGF0dGVybltdLCBvcHRpb25zOiBPcHRpb25zV2l0aEVudHJ5T2JqZWN0UHJlZGljYXRlKTogRW50cnlbXTtcblx0ZnVuY3Rpb24gc3luYyhzb3VyY2U6IFBhdHRlcm4gfCBQYXR0ZXJuW10sIG9wdGlvbnM/OiBPcHRpb25zKTogc3RyaW5nW107XG5cdGZ1bmN0aW9uIHN5bmM8VCBleHRlbmRzIEVudHJ5SXRlbSA9IHN0cmluZz4oc291cmNlOiBQYXR0ZXJuIHwgUGF0dGVybltdLCBvcHRpb25zPzogT3B0aW9ucyk6IFRbXTtcblx0Ly8gQHRzLWlnbm9yZVxuXHRmdW5jdGlvbiBzdHJlYW0oc291cmNlOiBQYXR0ZXJuIHwgUGF0dGVybltdLCBvcHRpb25zPzogT3B0aW9ucyk6IE5vZGVKUy5SZWFkYWJsZVN0cmVhbTtcblx0ZnVuY3Rpb24gZ2VuZXJhdGVUYXNrcyhzb3VyY2U6IFBhdHRlcm4gfCBQYXR0ZXJuW10sIG9wdGlvbnM/OiBPcHRpb25zKTogVGFza1tdO1xufVxuXG5GYXN0R2xvYi5kZWZhdWx0ID0gRmFzdEdsb2I7XG5cbmV4cG9ydCA9IEZhc3RHbG9iXG4iXX0=