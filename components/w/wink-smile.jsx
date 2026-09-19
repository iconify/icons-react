import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqbkv8u2i.css';
import '../../css/f/fl-0a17_a.css';
import '../../css/z/ze9xnfzdp.css';
import '../../css/k/kf8q499td.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqbkv8u2i"/><path class="fl-0a17_a"/><circle class="ze9xnfzdp"/><path class="kf8q499td"/>`,
		"fallback": "bx:wink-smile",
	});
}

export default Component;
