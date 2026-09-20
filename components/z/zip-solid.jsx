import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh7f1hoyt.css';
import '../../css/m/mmgfxwbmm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh7f1hoyt"/><path clip-rule="evenodd" class="mmgfxwbmm"/>`,
		"fallback": "teenyicons:zip-solid",
	});
}

export default Component;
