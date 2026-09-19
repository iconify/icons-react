import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amb6xmb9p.css';
import '../../css/b/bt5hmxdsg.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amb6xmb9p"/><path class="bt5hmxdsg"/>`,
		"fallback": "gis:world-folder-o",
	});
}

export default Component;
