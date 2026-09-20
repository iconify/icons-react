import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe8gjco0e.css';
import '../../css/d/d241niblj.css';
import '../../css/k/kltxv0ssh.css';
import '../../css/k/kdz4acc8r.css';
import '../../css/j/ja_tpciet.css';
import '../../css/t/txec4eymi.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe8gjco0e"/><circle class="d241niblj"/><path class="kltxv0ssh"/><g class="kdz4acc8r"><circle class="ja_tpciet"/><path class="txec4eymi"/></g>`,
		"fallback": "openmoji:white-chess-king",
	});
}

export default Component;
