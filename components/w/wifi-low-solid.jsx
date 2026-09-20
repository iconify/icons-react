import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_z4w9s3h.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_z4w9s3h"/>`,
		"fallback": "teenyicons:wifi-low-solid",
	});
}

export default Component;
