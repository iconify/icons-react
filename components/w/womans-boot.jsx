import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvpqzqbqv.css';
import '../../css/p/ph1shwbdp.css';
import '../../css/v/v4b2pp25u.css';
import '../../css/d/d0d7aqbow.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/iu-ut2ehy.css';
import '../../css/i/iyoly3fhu.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvpqzqbqv"/><path class="ph1shwbdp"/><path class="v4b2pp25u"/><path class="d0d7aqbow"/><g class="jn8qy4bru"><path class="iu-ut2ehy"/><path class="iyoly3fhu"/></g>`,
		"fallback": "openmoji:womans-boot",
	});
}

export default Component;
