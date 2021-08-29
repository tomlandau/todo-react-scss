import React from "react"

import { ReorderItem, REORDER_ITEM } from "./ReorderItem"

describe('ReorderItem', () => {
  it('should call ReorderItem action', () => {
    const initialPosition = 1;
    const newPosition = 0;

    const action = {
      type: REORDER_ITEM,
      payload: {
        initialPosition,
        newPosition,
      },
    };

    expect(ReorderItem(initialPosition, newPosition)).toEqual(action);
  });
});

// @ponicode
describe("ReorderItem.ReorderItem", () => {
    test("0", () => {
        let callFunction = () => {
            ReorderItem.ReorderItem(31040, 3)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            ReorderItem.ReorderItem(1, 9)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            ReorderItem.ReorderItem(2, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            ReorderItem.ReorderItem(8, 180)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            ReorderItem.ReorderItem(3600, 31)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            ReorderItem.ReorderItem(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
