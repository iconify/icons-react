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
		"content": `<style>.ejrp11zqk {
  fill: currentColor;
  d: path("M15.462 19.577v-4.539h1.019v-1q0-.748.51-1.258q.511-.51 1.259-.51t1.259.51t.51 1.259v1H21v4.538zm1.788-4.539h2v-1q0-.425-.288-.712t-.712-.288t-.712.288t-.288.712zM12 19.578L1.423 9q2.183-1.964 4.91-2.982Q9.063 5 12 5t5.666 1.018Q20.394 7.037 22.577 9l-1.821 1.821q-.479-.179-.99-.268q-.51-.09-1.03-.09q-2.42 0-4.122 1.703q-1.702 1.701-1.702 4.123q0 .52.089 1.03q.09.51.268.989z");
}
</style><path class="ejrp11zqk"/>`,
		"fallback": "material-symbols-light:wifi-lock-sharp",
	});
}

export default Component;
