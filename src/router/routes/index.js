// import type { RouteRecordNormalized } from 'vue-router';

const modules = import.meta.glob('./modules/*.js', { eager: true });
const externalModules = import.meta.glob('./externalModules/*.js', {
  eager: true,
});

function formatModules(_modules, result) {
  Object.keys(_modules).forEach((key) => {
    const defaultModule = _modules[key].default;
    if (!defaultModule) return;
    const moduleList = Array.isArray(defaultModule)
      ? [...defaultModule]
      : [defaultModule];
    result.push(...moduleList);
  });
  console.log();
  return result;
}

export const appRoutes = formatModules(modules, []);

export const appExternalRoutes = formatModules(
  externalModules,
  []
);
