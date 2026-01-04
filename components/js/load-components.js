export const load = (componentPath) => {
  return `
 <div
   hx-get="${componentPath}"
   hx-trigger="revealed once"
   hx-swap="outerHTML"
 >
 </div>
 `;
};
