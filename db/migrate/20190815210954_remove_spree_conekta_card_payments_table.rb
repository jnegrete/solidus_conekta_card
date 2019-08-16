# frozen_string_literal: true

class RemoveSpreeConektaCardPaymentsTable < SolidusSupport::Migration[4.2]
  def change
    drop_table :spree_conekta_card_payments
  end
end
