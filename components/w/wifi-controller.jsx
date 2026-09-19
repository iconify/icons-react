import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyr___g3f.css';
import '../../css/d/dfv392bxj.css';
import '../../css/o/osrg4ib8c.css';
import '../../css/f/f3ilqbcpe.css';
import '../../css/x/xqwg8m_7k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wyr___g3f"/><circle class="dfv392bxj"/><circle class="osrg4ib8c"/><path class="f3ilqbcpe"/><path class="xqwg8m_7k"/>`,
		"fallback": "carbon:wifi-controller",
	});
}

export default Component;
