import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x3fi0m73u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.75 4.707C2.428 12.17-1.147 25.051 6.928 36.492c6.604 9.357 18.507 10.545 29.03 5.162c6.783-3.47 9.9-11.946 9.509-20.22C44.534 1.732 24.34 1.913 19.542 4.164c-3.87 1.816-6.393 3.95-8.049 9.12c-2.747 8.582 16.358-.974 19.954-2.604c13.988-6.337 6.321 2.659-.032 6.434c-5.264 3.128-12.343 5.055-16.453 6.183c-4.336 1.19 1.875 6.534 10.386 6.815c8.476.28 15.543 7.611 15.232 7.611");
}
</style><path class="x3fi0m73u"/>`,
		"fallback": "arcticons:zhejiang-liban",
	});
}

export default Component;
