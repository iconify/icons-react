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
		"content": `<style>.i9clfwm2k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4");
}

.kxdpk-sgx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.5 26.125a10.4 10.4 0 0 1 4.5-1.062a10.44 10.44 0 0 1 9.992 7.437m5.9-1.232A16.47 16.47 0 0 0 18 19.03q-.966.013-1.922.138");
}

.o06qhku7z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.5 32.5h15a3 3 0 0 0 3-3v-5a6.76 6.76 0 0 0-2.225-5.013l-6.05-5.474a3.316 3.316 0 0 0-4.45 0l-6.05 5.474A6.76 6.76 0 0 0 13.5 24.5v5a3 3 0 0 0 3 3");
}
</style><path class="i9clfwm2k"/><path class="o06qhku7z"/><path class="kxdpk-sgx"/>`,
		"fallback": "arcticons:yandex-iot",
	});
}

export default Component;
