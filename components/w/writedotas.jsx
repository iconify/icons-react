import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2hk2mbes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2hk2mbes"/>`,
		"fallback": "simple-icons:writedotas",
	});
}

export default Component;
