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
		"content": `<style>.idkrp03-j {
  fill: currentColor;
  d: path("M3 19V5h18v14zm1-1h5V6H4zm11 0h5V6h-5z");
}
</style><path class="idkrp03-j"/>`,
		"fallback": "material-symbols-light:width-normal-sharp",
	});
}

export default Component;
