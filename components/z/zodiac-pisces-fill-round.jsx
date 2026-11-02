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
		"content": `<style>.utk1-nb4e {
  fill: currentColor;
  d: path("M18.035 11H19a1 1 0 0 1 0 2h-.965a14 14 0 0 0 2.765 7.4a1 1 0 0 1-1.6 1.2a16 16 0 0 1-3.169-8.6H7.969A16 16 0 0 1 4.8 21.6a1 1 0 0 1-1.6-1.2A14 14 0 0 0 5.965 13H5a1 1 0 0 1 0-2h.965A14 14 0 0 0 3.2 3.6a1 1 0 0 1 1.6-1.2A16 16 0 0 1 7.969 11h8.062A16 16 0 0 1 19.2 2.4a.998.998 0 0 1 1.66.091A1 1 0 0 1 20.8 3.6a14 14 0 0 0-2.765 7.4");
}
</style><path class="utk1-nb4e"/>`,
		"fallback": "coolicons:zodiac-pisces-fill-round",
	});
}

export default Component;
