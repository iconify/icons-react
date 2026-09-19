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
		"content": `<style>.mtxw-xb2i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.153 19.607h-.19a5.084 5.084 0 0 1-5.082-5.082V9.582A5.084 5.084 0 0 1 37.963 4.5h.19c.944 0 1.71.767 1.71 1.71v11.687a1.71 1.71 0 0 1-1.71 1.71");
}

.n-vy6h8js {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.846 13.287h.19a5.084 5.084 0 0 1 5.082 5.082v4.942a5.084 5.084 0 0 1-5.082 5.082h-.19a1.71 1.71 0 0 1-1.71-1.71V14.998c0-.944.766-1.71 1.71-1.71M32.882 4.5a6.98 6.98 0 0 0-6.982 6.982v23.231a6.98 6.98 0 0 0 6.982-6.982z");
}

.rfupoxleq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.118 13.287a6.98 6.98 0 0 1 6.982 6.982V43.5a6.98 6.98 0 0 1-6.982-6.982z");
}
</style><path class="rfupoxleq"/><path class="n-vy6h8js"/><path class="mtxw-xb2i"/>`,
		"fallback": "arcticons:xiaomi-earbuds",
	});
}

export default Component;
