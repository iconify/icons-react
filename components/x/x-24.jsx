import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eexulhiqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eexulhiqc"/>`,
		"fallback": "qlementine-icons:x-24",
	});
}

export default Component;
