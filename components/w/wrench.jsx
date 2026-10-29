import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq-2jgltl.css';
import '../../css/q/q_x17n-8o.css';
import '../../css/h/h4v288bmp.css';
import '../../css/z/zhkr15b7o.css';
import '../../css/d/d0rdk4b3h.css';
import '../../css/l/lj4n6xbhx.css';
import '../../css/z/z7_ywibmr.css';
import '../../css/k/kl7twqbnb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow xq-2jgltl"/><path class="q_x17n-8o"/><path class="h4v288bmp"/><path class="zhkr15b7o"/><path class="d0rdk4b3h"/><path class="lj4n6xbhx wm-shine"/><path class="z7_ywibmr"/><path class="kl7twqbnb"/>`,
		"fallback": "withicons-plush:wrench",
	});
}

export default Component;
