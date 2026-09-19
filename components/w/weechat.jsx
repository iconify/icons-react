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
		"content": `<style>.bjgka0ble {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.457 14.898a21.6 21.6 0 0 0 1.831-12.186a21.6 21.6 0 0 0-12.186 1.83a21.3 21.3 0 0 0-18.204 0a21.6 21.6 0 0 0-12.186-1.83a21.6 21.6 0 0 0 1.83 12.186A21.492 21.492 0 1 0 45.5 24a21.4 21.4 0 0 0-2.043-9.102");
}

.krw_26buu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14 30.145a3.355 3.355 0 1 1 6.71 0Zm13.29 0a3.355 3.355 0 0 1 6.71 0Z");
}
</style><path class="bjgka0ble"/><path class="krw_26buu"/>`,
		"fallback": "arcticons:weechat",
	});
}

export default Component;
