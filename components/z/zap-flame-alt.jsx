import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ipgb5zbix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.333 11.333L4.138 14.53c-.137.137-.369.01-.327-.18l1.044-4.698A.535.535 0 0 0 4.333 9h-.666a.433.433 0 0 1-.396-.61l2.22-4.994A.67.67 0 0 1 6.1 3h3.567c.297 0 .483.32.336.579L7.997 7.088a.387.387 0 0 0 .336.579h2c.246 0 .37.297.196.471zM16 21c-5.667-4.667-1.667-8.667 1-12c2.667 3.333 6.667 7.333 1 12Zm0 0c-3-2.333-1.667-4.333 1-6.667c2.667 2.334 4 4.334 1 6.667");
}
</style><path class="ipgb5zbix"/>`,
		"fallback": "coolicons:zap-flame-alt",
	});
}

export default Component;
