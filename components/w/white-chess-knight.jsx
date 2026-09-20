import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef5az8bjm.css';
import '../../css/z/zzfjsvbjw.css';
import '../../css/x/x1gv8jzhk.css';
import '../../css/f/f6u1-j07w.css';
import '../../css/x/xbi_3zldz.css';
import '../../css/y/y-a3b_x-a.css';
import '../../css/s/s9h2kjhdj.css';
import '../../css/y/ymy6r4dwt.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef5az8bjm"/><path class="zzfjsvbjw"/><path class="x1gv8jzhk"/><path class="f6u1-j07w"/><path class="xbi_3zldz"/><circle class="y-a3b_x-a"/><path class="s9h2kjhdj"/><path class="ymy6r4dwt"/>`,
		"fallback": "openmoji:white-chess-knight",
	});
}

export default Component;
