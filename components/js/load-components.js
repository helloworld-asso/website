export const load = (componentPath) => {
  // Use a load trigger so components are fetched immediately when inserted.
  // Keep the path as provided (prefer relative paths when calling `load`).
  return `
 <div
   hx-get="${componentPath}"
   hx-trigger="load once"
   hx-swap="outerHTML"
 >
 </div>
 `;
};
