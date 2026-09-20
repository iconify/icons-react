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
		"content": `<style>.b_r1hybez {
  fill: currentColor;
  d: path("M19.95 21q-3.125 0-6.187-1.35T8.2 15.8t-3.85-5.55T3 4.05V3h5.9l.925 5.025l-2.85 2.875q.55.975 1.225 1.85t1.45 1.625q.725.725 1.588 1.388T13.1 17l2.9-2.9l5 1.025V21zM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.125.375 2.113T6.025 9m8.95 8.95q1 .425 2.013.675T19 18.95v-2.2l-2.35-.475zm.813-7.262q-.288-.288-.288-.713t.288-.712t.712-.288t.713.288t.287.712t-.288.713t-.712.287t-.712-.287");
}
</style><path class="b_r1hybez"/>`,
		"fallback": "material-symbols:wifi-calling-bar-1-outline-sharp",
	});
}

export default Component;
