import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yllajgbtw.css';
import '../../css/z/zvjeae8vn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yllajgbtw"/><path clip-rule="evenodd" class="zvjeae8vn"/>`,
		"fallback": "qlementine-icons:window-16",
	});
}

export default Component;
