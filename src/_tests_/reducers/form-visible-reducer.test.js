import rootReducer from '../../reducers';
import formVisibleReducer from '../../reducers/form-visible-reducer';



describe("formVisibleReducer", () => {

    test('Should return default state if no action type is recognized', () => {
        expect(formVisibleReducer(false, { type: null })).toEqual(false);
    });

    test('Should toggle form visibility state to true', () => {
        expect(formVisibleReducer(false, { type: 'TOGGLE_FORM' })).toEqual(true);
    });

    test('Check that ADD_TICKET action works for ticketListReducer and root reducer', () => {
        const action = {
            type: 'ADD_TICKET',
            names: 'Ryan & Aimen',
            location: '4b',
            issue: 'Redux action is not working correctly.',
            id: 1
        }
        store.dispatch(action);
        expect(store.getState().mainTicketList).toEqual(ticketListReducer(undefined, action));
    });

    test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
        const action = {
            type: 'TOGGLE_FORM'
        }
        store.dispatch(action);
        expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
    });
});