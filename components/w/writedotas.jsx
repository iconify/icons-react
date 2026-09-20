import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlfven3ep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlfven3ep"/>`,
		"fallback": "thesvg-color:writedotas",
	});
}

export default Component;
