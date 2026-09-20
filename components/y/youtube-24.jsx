import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpwxbbc7k.css';
import '../../css/n/n0w792bml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpwxbbc7k"/><path clip-rule="evenodd" class="n0w792bml"/>`,
		"fallback": "qlementine-icons:youtube-24",
	});
}

export default Component;
