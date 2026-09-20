import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz50wxbre.css';
import '../../css/z/zh9lxxd8p.css';
import '../../css/j/jzsn4fblp.css';
import '../../css/a/a5nz24eur.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz50wxbre"/><path class="zh9lxxd8p"/><path class="jzsn4fblp"/><path class="a5nz24eur"/>`,
		"fallback": "selfhst:xbackbone",
	});
}

export default Component;
