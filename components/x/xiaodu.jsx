import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/t/tbsa7mbvm.css';
import '../../css/c/c9o6rtblp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4gwxNddI"><g class="aql7dnt-u"><path class="tbsa7mbvm"/><path class="c9o6rtblp"/></g></mask></defs><path mask="url(#SVG4gwxNddI)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:xiaodu",
	});
}

export default Component;
