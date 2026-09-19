import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9ufam33t.css';
import '../../css/v/vo-ay7btf.css';
import '../../css/w/w5m1tlf7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b z9ufam33t"/><path class="b vo-ay7btf"/><path class="b w5m1tlf7p"/>`,
		"fallback": "bxl:zen-browser",
	});
}

export default Component;
