// 空实现文件，用于 BUILD_MODE=export 时替代含 "use server" 的 actions.ts

export const isMcpEnabled = async () => false;
export const initializeMcpSystem = async () => {};
export const getClientsStatus = async () => ({});
export const getClientTools = async () => null;
export const getAvailableClientsCount = async () => 0;
export const getAllTools = async () => [];
export const executeMcpAction = async () => {
  throw new Error("MCP is disabled in export mode");
};
