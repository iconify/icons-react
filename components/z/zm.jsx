import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/o/odwb28lai.css';
import '../../css/b/bepfeubss.css';
import '../../css/h/hzikswbgz.css';
import '../../css/w/wtopwl5cz.css';
import '../../css/f/fbsybyz-p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="odwb28lai"/><path class="bepfeubss"/><path class="hzikswbgz"/><path class="wtopwl5cz"/><path class="fbsybyz-p"/></g>`,
		"fallback": "circle-flags:zm",
	});
}

export default Component;
