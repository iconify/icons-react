import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rfz--ibcx {
  fill: currentColor;
  d: path("m201.5 104.8l-21.78-73.93a4 4 0 0 0-3.83-2.87H80.11a4 4 0 0 0-3.83 2.87L54.5 104.8a59.51 59.51 0 0 0 16.32 60.62A83.4 83.4 0 0 0 124 187.91V236H88a4 4 0 1 0 0 8h80a4 4 0 1 0 0-8h-36v-48.09a83.4 83.4 0 0 0 53.18-22.49a59.51 59.51 0 0 0 16.32-60.62M83.1 36h89.8l20.93 71.06c.43 1.49.8 3 1.1 4.47c-23.64 10.47-50.76.18-65.12-7.1c-28.22-14.29-49.48-14.1-63.88-10.14Zm96.62 123.57a75.68 75.68 0 0 1-103.44 0a51.53 51.53 0 0 1-14.11-52.51l1-3.46c12.66-4.87 33.45-7 63 8C137 117 154.33 124 172.8 124a62.8 62.8 0 0 0 23.2-4.22a51.26 51.26 0 0 1-16.28 39.79");
}
</style><path class="rfz--ibcx"/>`,
		"fallback": "ph:wine-thin",
	});
}

export default Component;
